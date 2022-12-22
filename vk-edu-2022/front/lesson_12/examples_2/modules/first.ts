// import
// export

export default () => console.log('well done!');
const muFunc = () => console.log('well done!');
export { muFunc };

// interfaces

export interface IMartin {
    name: string;
    status: string;
    isTop(): boolean;
}
