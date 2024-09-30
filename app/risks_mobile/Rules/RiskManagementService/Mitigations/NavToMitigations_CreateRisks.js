export default function NavToCreate(clientAPI) {
    if (clientAPI.getODataProvider('/risks_mobile/Services/RiskManagementService.service').isDraftEnabled('Mitigations')) {
        return clientAPI.executeAction({
            'Name': '/risks_mobile/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Mitigations'
                },
                'OnSuccess': '/risks_mobile/Actions/RiskManagementService/Mitigations/NavToMitigations_CreateRisks.action'
            }
        });
    } else {
        return clientAPI.executeAction('/risks_mobile/Actions/RiskManagementService/Mitigations/NavToMitigations_CreateRisks.action');
    }
}