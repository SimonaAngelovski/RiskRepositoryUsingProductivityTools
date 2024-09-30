export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/risks_mobile/Services/RiskManagementService.service').isDraftEnabled('Mitigations')) {
        return clientAPI.executeAction({
            'Name': '/risks_mobile/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Mitigations'
                },
                'OnSuccess': '/risks_mobile/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/risks_mobile/Actions/CloseModalPage_Cancel.action');
    }
}