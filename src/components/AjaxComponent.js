import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true)

    const getStaticUsers = () => {
        setUsuarios([
            {
                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 8,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 9,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            }
        ])
    }

    const getUsuariosAJAX = () => {
        fetch("https://reqres.in/api/users?page=1")
        .then(respuesta => respuesta.json())
        .then(resultado_final => {
            setUsuarios(resultado_final.data)
            console.log(usuarios)
        }, error => {
            console.log("Error en la petición")
        })
    }

    const getUsuariosAjaxAA = () => {
        setTimeout(async () => {
            const peticion = await fetch("https://reqres.in/api/users?page=2")
            const {data} = await peticion.json();
    
            setUsuarios(data)
            setCargando(false);
        }, 2000)
        
    }

    useEffect(() => {
        //getStaticUsers();
        getUsuariosAjaxAA();

    }, [])

    if(cargando === true){
        return (
            <div className='cargandodatos'>
                cargando datos...
            </div>
        )
    } else {
        return (
        <div>
            <h2>Listado de usuarios via Ajax</h2>
            <ol className='usuarios'>
                {
                    usuarios.map(usuario => {
                        return <li key={usuario.id}> <img src = {usuario.avatar}></img>
                            {usuario.first_name} {usuario.last_name}
                                   
                        </li>
                    })
                }
            </ol>

        </div>
    )

    }
    

    
}
