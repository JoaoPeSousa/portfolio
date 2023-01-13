import Header from "../shared/Header";

const BaseLayout = (props: { children: any; }) => {
    return (
        <>
            <Header/>
            {props.children}
        </>
    )
}


export default BaseLayout
