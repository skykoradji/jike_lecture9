import { Selector } from 'testcafe';

fixture`Getting Started`.page`https://devexpress.github.io/testcafe/example`; // declare the fixture // specify the start page

//then create a test and place your code there
test('My first test', async t => {
  const result = Selector('#article-header').innerText;
  await t
    .typeText('#developer-name', 'John Smith')
    .click('#submit-button')
    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(result)
    .eql('Thank you, John Smith!');
});
