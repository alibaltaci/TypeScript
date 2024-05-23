import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ReduxProvider from './store/store.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ReduxProvider>
        <App />
    </ReduxProvider>
    
)
