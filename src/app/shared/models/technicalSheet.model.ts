export class TechnicalSheet {
    //id: string;
    description: string;
    storage: string;
    harvestPeriod: string;
    region: string;
    use: string;
    status: string;
    type: string;

    constructor(
        description: string,
        storage: string,
        harvestPeriod: string,
        region: string,
        use: string,
        status: string,
        type: string
    ) {
        this.description = description;
        this.storage = storage;
        this.harvestPeriod = harvestPeriod;
        this.region = region;
        this.use = use;
        this.status = status;
        this.type = type;
    }

}