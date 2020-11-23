import { Container } from 'react-bootstrap'

const ErrorMessage = ({ message }) => {
    return (
        <Container className='text-center err-message p-3 p-sm-5'>
            <i class="far fa-frown"></i> {message}
        </Container>
    )
}

export default ErrorMessage