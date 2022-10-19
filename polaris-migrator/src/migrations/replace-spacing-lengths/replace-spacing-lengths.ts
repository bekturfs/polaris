import type {FileInfo, API, Options} from 'jscodeshift';
import postcss from 'postcss';
import valueParser from 'postcss-value-parser';

import {
  getFunctionArgs,
  isNumericOperator,
  isSassFunction,
  isTransformableLength,
  namespace,
  toTransformablePx,
  StopWalkingFunctionNodes,
  createPlugin,
} from '../../utilities/sass';
import {isKeyOf} from '../../utilities/type-guards';

export default function replaceSpacingLengths(
  fileInfo: FileInfo,
  _: API,
  options: Options,
) {
  return postcss(plugin(options)).process(fileInfo.source, {
    syntax: require('postcss-scss'),
  }).css;
}

const plugin = createPlugin('replace-sass-space', (options = {}) => {
  const namespacedRem = namespace('rem', options);

  return (decl, {report, context}) => {
    if (!spaceProps.has(decl.prop)) return;

    let hasNumericOperator = false;

    handleSpaceProps();

    if (hasNumericOperator) {
      report({
        severity: 'warning',
        message: 'Numeric operator detected.',
      });
    }

    function handleSpaceProps() {
      decl.parsedValue.walk((node) => {
        if (node.type === 'word') {
          if (globalValues.has(node.value)) return;
          if (isNumericOperator(node)) {
            hasNumericOperator = true;
            return;
          }

          const dimension = valueParser.unit(node.value);

          if (!isTransformableLength(dimension)) return;

          const valueInPx = toTransformablePx(node.value);

          if (!isKeyOf(spaceMap, valueInPx)) {
            report({
              severity: 'error',
              message: `Non-tokenizable value '${node.value}'`,
            });
            return;
          }

          if (context.fix) {
            node.value = `var(${spaceMap[valueInPx]})`;
            return;
          }

          report({
            severity: 'error',
            message: `Prefer var(${spaceMap[valueInPx]}) Polaris token.`,
          });
          return;
        }

        if (node.type === 'function') {
          if (isSassFunction(namespacedRem, node)) {
            const args = getFunctionArgs(node);

            if (args.length !== 1) {
              report({
                severity: 'error',
                message: `Expected 1 argument, got ${args.length}`,
              });
              return;
            }

            const valueInPx = toTransformablePx(args[0]);

            if (!isKeyOf(spaceMap, valueInPx)) {
              report({
                severity: 'error',
                message: `Non-tokenizable value '${args[0].trim()}'`,
              });
              return;
            }

            if (context.fix) {
              node.value = 'var';
              node.nodes = [
                {
                  type: 'word',
                  value: spaceMap[valueInPx],
                  sourceIndex: node.nodes[0]?.sourceIndex ?? 0,
                  sourceEndIndex: spaceMap[valueInPx].length,
                },
              ];
              return;
            }
            report({
              severity: 'error',
              message: `Prefer var(${spaceMap[valueInPx]}) Polaris token.`,
            });
          }

          return StopWalkingFunctionNodes;
        }
      });
    }
  };
});

const globalValues = new Set(['inherit', 'initial', 'unset']);

const spaceProps = new Set([
  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
  'padding-inline',
  'padding-inline-start',
  'padding-inline-end',
  'padding-block',
  'padding-block-start',
  'padding-block-end',
  'margin',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',
  'margin-inline',
  'margin-inline-start',
  'margin-inline-end',
  'margin-block',
  'margin-block-start',
  'margin-block-end',
  'gap',
  'grid-gap',
  'row-gap',
  'grid-row-gap',
  'column-gap',
  'grid-column-gap',
]);

const spaceMap = {
  '1px': '--p-space-025',
  '2px': '--p-space-05',
  '4px': '--p-space-1',
  '8px': '--p-space-2',
  '12px': '--p-space-3',
  '16px': '--p-space-4',
  '20px': '--p-space-5',
  '24px': '--p-space-6',
  '32px': '--p-space-8',
  '40px': '--p-space-10',
  '48px': '--p-space-12',
  '64px': '--p-space-16',
  '80px': '--p-space-20',
  '96px': '--p-space-24',
  '112px': '--p-space-28',
  '128px': '--p-space-32',
} as const;
