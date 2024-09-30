export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/risks_mobile/Services/RiskManagementService.service').isDraftEnabled('Mitigations')) {
        return clientAPI.executeAction({
            'Name': '/risks_mobile/Actions/RiskManagementService/Mitigations/Mitigations_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/risks_mobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Mitigations'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/risks_mobile/Actions/RiskManagementService/Mitigations/Mitigations_UpdateEntity.action');
    }
}