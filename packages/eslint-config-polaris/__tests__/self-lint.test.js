const assert = require('assert');
const path = require('path');
const { ESLint } = require('eslint');

describe('test/self-lint.test.js', () => {
  it('Repo self should pass lint', async () => {
    const cli = new ESLint({
      baseConfig: {
        extends: require.resolve(path.join(__dirname, '../index')),
      },
      ignore: true,
      ignorePath: (path.join(__dirname, '../.eslintignore')),
    });

    const reports = await cli.lintFiles([path.join(__dirname, '../src')]);
    assert.equal(
      reports.reduce((count, { errorCount }) => errorCount + count, 0),
      0,
    );
  });
});
