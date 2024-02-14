import { useEffect } from 'react';
import styles from './alert.module.css';
import Container from '../container/container';
import Typography from '../typography/typography';

type AlertType = 'primary' | 'success' | 'danger' | 'warning'

enum AlertColor {
    primary = 'blue',
    danger = 'red',
    success = 'green',
    warning = 'yellow'
}

export interface AlertState {
    type: AlertType
    message: string
}

interface props {
    message: string
    type: AlertType
    handleState: React.Dispatch<React.SetStateAction<AlertState | undefined>>
}

function Alert({ type, message, handleState }: props) {

    useEffect(() => {
        const timeout = setTimeout(() => {
            handleState(undefined)
        }, 3000);

        return () => clearTimeout(timeout);
    }, [handleState]);
    
    return (
        <Container className={styles.alert}>
            <div className={`bg-${AlertColor[type]}-200 border-${AlertColor[type]}-400 text-${AlertColor[type]}-700 py-3 rounded`} role="alert">
                <Typography className='mb-0 font-semibold block sm:inline'>{message}</Typography>
            </div>
        </Container>
    )
}

export default Alert;