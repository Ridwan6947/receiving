export default interface UserState {
    token: string;
    current: object | null;
    currentFacility: object | null;
    currentEComStore: object;
    instanceUrl: string;
    facilityLocationsByFacilityId: any;
    preferredDateTimeFormat: string;
}