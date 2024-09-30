export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/risks_mobile/Services/RiskManagementService.service').isDraftEnabled('Risks')) {
        return clientAPI.executeAction({
            'Name': '/risks_mobile/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Risks'
                },
                'OnSuccess': '/risks_mobile/Actions/RiskManagementService/Risks/NavToRisks_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/risks_mobile/Actions/RiskManagementService/Risks/NavToRisks_Edit.action');
    }
}