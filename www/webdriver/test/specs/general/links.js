const assert = require('assert');

describe('webdriver.io page', () => {
    it('C6 should have the right title - NET-A-PORTER.COM', () => {
        browser.url('https://www.net-a-porter.com/gb/en/');
        const title = browser.getTitle();
        assert.equal(title, 'NET-A-PORTER.COM');
    });

    it('C7 All links should point to an exsiting page', () => {
        browser.url('https://www.net-a-porter.com/gb/en/');
        let links = browser.elements('a');
        let correctLinks = 0;
        let brokenLinks = [];

        for (let i = 0; i < links.value.length; i++) {
            let link = links.value[i].ELEMENT,
                href = browser.elementIdAttribute(link, 'href'),
                status = true;

            fetch(href.value, {
                follow: 100
            })
                .then(function (res) {
                    correctLinks++;
                })
                .catch(function (err) {
                    status = false;
                    brokenLinks.push(href.value);
                });

            expect(status).to.be.true;
        }

        console.log(`Correct links found: ${correctLinks}`);
        console.log(`Broken links found: ${brokenLinks.length}`);
        if (brokenLinks.length > 0) {
            console.log(`broken links found:\n${brokenLinks.join(',\n')}`);
        }
        console.log(`total: ${correctLinks + brokenLinks.length}`)
    })
});
