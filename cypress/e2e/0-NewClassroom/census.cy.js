import * as body from "../../fixtures/data.json"
import * as countryResults from "../../fixtures/countryResults.json"
import * as genderResults from "../../fixtures/genderResults.json"
import * as passwordResults from "../../fixtures/passwordResults.json"
let url = "https://census-toy.nceng.net/prod/toy-census"
let actionCountry = {'actionType':'CountByCountry','top':0,}
let actionGender = {'actionType':'CountByGender','top':0,}
let actionPassword = {'actionType':'CountPasswordComplexity','top':0,}
let payloadGender = Object.assign({},actionGender,body)
let payloadCountry = Object.assign({},actionCountry,body)
let payloadPassword = Object.assign({},actionPassword,body)
describe('Census Country Action Post', function () {
it('Send post for Country Action to website', () => {
    cy.request("POST", url, payloadCountry).then((response) => {
        cy.writeFile("cypress/fixtures/responseCountry.json",response.body)
        let responseCountry = response.body
        let keyCount = Object.keys(responseCountry).length;

    for (let i = 0; i < keyCount; i++) {
        if (countryResults[i].name === responseCountry[i].name) {
            expect(countryResults[i].name + ': ' + countryResults[i].value).to.equal(responseCountry[i].name + ': ' + responseCountry[i].value)
        }
    }
    })
})
})
describe('Census Gender Action Post', function () {
it('Send post for Gender Action to website', () => {
    cy.request("POST", url, payloadGender).then((response) => {
        cy.writeFile("cypress/fixtures/responseGender.json",response.body)
        let responseGender = response.body
        let keyCount = Object.keys(responseGender).length;

    for (let i = 0; i < keyCount; i++) {
        if (genderResults[i].name === responseGender[i].name) {

            expect(genderResults[i].name + ': ' + genderResults[i].value).to.equal(responseGender[i].name + ': ' + responseGender[i].value)
        }
    }
    })
})
})
describe('Census Password Action Post', function () {
    it('Send post for Password Action to website', () => {
        cy.request("POST", url, payloadPassword).then((response) => {
            cy.log(response.body)
            cy.writeFile("cypress/fixtures/responsePassword.json",response.body)
            let responsePassword = response.body
            let keyCount = Object.keys(responsePassword).length;
    
        for (let i = 0; i < keyCount; i++) {
            if (passwordResults[i].name === responsePassword[i].name) {
                expect(passwordResults[i].name + ': ' + passwordResults[i].value).to.equal(responsePassword[i].name + ': ' + responsePassword[i].value)
            }
        }
        })
    })
})