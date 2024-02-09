import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { publicRoutes, privateRoutes } from "../Routes/Routes"
import { useDispatch, useSelector } from "react-redux"
import { useGetFavoritesByIdQuery, useGetUserByIdQuery } from "../API/api"
import { actions } from "../store/Auth/auth.slice"
import { actions as favActions } from "../store/favorite/favorite.slice"
import { useEffect } from "react"
import Loader from "../Components/UI/Loader/Loader"

const Router = () => {

  const { data: favorite } = useGetFavoritesByIdQuery(localStorage.getItem("id"), {skip: !localStorage.getItem("id")})
  
  const { data: user, isLoading } = useGetUserByIdQuery(localStorage.getItem("id"), {skip: !localStorage.getItem("id")})

  const dispatch = useDispatch()

  useEffect(() => {
    if (user && favorite) {
      dispatch(actions.CreateAccount({auth: user.auth, data: user.data}))
      favorite.data.forEach(elem => {
        dispatch(favActions.TogleFavorites(elem))
      })
    }
  }, [user, favorite, dispatch])

  const { auth } = useSelector(state => state.authReducer)

  if (isLoading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
        <Routes>
          {
            auth
            ?
            <>
            {
              privateRoutes.map(route => <Route key={ route.path } path={ route.path } element={ <route.element /> } />)
            }
            <Route path="*" element={ <Navigate to={"/auth"} /> } />
            </>
            :
            <>
            {
              publicRoutes.map(route => <Route key={ route.path } path={ route.path } element={ <route.element /> } />)
            }
            <Route path="*" element={ <Navigate to={"/"} /> } />
            </>
          }
        </Routes>
    </BrowserRouter>
  )
}

export default Router
