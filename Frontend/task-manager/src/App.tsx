import { Container } from 'react-bootstrap'

import TaskHeader from './components/header/TaskHeader'
import TaskBody from './components/body/TaskBody'

const App = () => {
    return (
        <Container>
            <TaskHeader />
            <TaskBody />
        </Container>
    )
}

export default App