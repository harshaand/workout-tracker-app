import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import DataContext from './DataContext.jsx'
import LoadingLottie from './components/LoadingLottie.jsx'
import { RoutingProvider } from './RoutingContext.jsx'

function App() {
  const { fetchUserData } = React.useContext(DataContext)
  const { loginWithRedirect, isLoading, isAuthenticated, getAccessTokenSilently } = useAuth0()

  React.useEffect(() => {
    fetchUserData()
  }, [isAuthenticated, getAccessTokenSilently])

  if (isLoading) return <LoadingLottie />


  if (isAuthenticated) return <RoutingProvider />
  else {
    loginWithRedirect()
    return <LoadingLottie />
  }
}

export default App