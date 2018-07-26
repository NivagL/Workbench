export class LineChartConfig {
    title: string;
    subtitle: string;
    curveType: string;

    constructor(title: string, subtitle: string, curveType: string) {
        this.title = title;
        this.subtitle = subtitle;
        this.curveType = curveType;
    }
}