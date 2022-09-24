
export const goBack =(navigate) =>{
    navigate(-1)
}


export const goToHomePage =(navigate)=>{
    navigate("/HomePage")
}

export const goToCards =(navigate) =>{
    navigate("/carta")
}

export const goToCardsDetail = (navigate, name)=>{
    navigate(`/carta/${name}`)
}
