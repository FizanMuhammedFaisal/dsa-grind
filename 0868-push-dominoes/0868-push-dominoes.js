/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
    const dom = dominoes.split('');
    const q = new Queue();

    for (let i = 0; i < dom.length; i++) {
        if (dom[i] !== '.') {
            q.push([i, dom[i]]);
        }
    }

    while (!q.isEmpty()) {
        const [i, d] = q.pop();

        if (d === 'L' && i > 0 && dom[i - 1] === '.') {
            q.push([i - 1, 'L']);
            dom[i - 1] = 'L';
        } else if (d === 'R') {
            if (i + 1 < dom.length && dom[i + 1] === '.') {
                if (i + 2 < dom.length && dom[i + 2] === 'L') {
                    q.pop();
                } else {
                    q.push([i + 1, 'R']);
                    dom[i + 1] = 'R';
                }
            }
        }
    }
    return dom.join('')



};