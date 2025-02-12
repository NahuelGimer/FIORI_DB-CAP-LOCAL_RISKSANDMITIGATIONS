//This view is optional, is for the display design.

const cds = require('@sap/cds')

module.exports = cds.service.impl(async function(){
    this.after('READ', 'Risks', risksData => {
        const risks = Array.isArray(risksData) ? risksData: [risksData];
       risks.forEach(risk => {
        if (risk.impact >= 10002){
            risk.criticality = 1;
        } else {
            risk.criticality = 2
        }
       })
    })
})