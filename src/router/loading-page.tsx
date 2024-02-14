import { CSSProperties } from "react";
import { ring } from 'ldrs';
import Container from "@SC/ui/container/container";
import Typography from "@SC/ui/typography/typography";

function LoadingPage() {
    ring.register();

    const style: CSSProperties = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: '-50px',
        marginLeft: '-50px',
        width: '100px',
        height: '100px'
    }

    return (
        <Container style={style}>
            <Container style={{textAlign: 'center'}}>
                <Typography tag="h2">Solution Cloud</Typography>
                <l-ring></l-ring>
            </Container>
        </Container>
    )
};

export default LoadingPage