export default interface Comment {
    id: number;
    parent: number;
    text: string;
    time: number;
    by: string;
    kids: number[];
    type: string;
}