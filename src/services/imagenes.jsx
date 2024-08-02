export const GetImagenes = async function(id) {
    const url = "http://localhost:3000/imagenes"+ id;
    let requestOptions = {
        method: "GET",
        headres: {
            "Content-Type": "application/json",
        },
    };
    const c = await fetch(url, requestOptions)
        .then((response) => {
            const b = response.json().then((a) => {
                //console.log(a);
                return a
            });
            return b;
         })
        .catch((error) => {
            return {
                ok: false,
                result: {
                    message: "Error en la consulta: " + error,
                },
            };
        });

    return c;
};


export const InsertImagenes = async function (
    numIdentificacion,
    nombreImagen,
    fecha,
    ){

         
    const data = {
        numIdentificacion,
        nombreImagen,
        fecha,
    };
    

    const url = "http://localhost:3000/imagenes";
    let requestOptions = {
        method: "POST",
        headres: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

    const c = await fetch(url, requestOptions)
        .then((response) => {
            const b = response.json().then((a) => {
                console.log(a);
                return a
            });
            return b;
         })
        .catch((error) => {
            return {
                ok: false,
                result: {
                    message: "Error en la consulta: " + error,
                },
            };
        });

    return c;

};

export const UpdateImagenes  = async function (
        numIdentificacion,
        nombreImagen,
        fecha,
) {
    if (nombre ==="" || apellidos === ""){
        return {
            ok: false,
            result: {
                    message: "El nombre y apellidos son obligatorios",
            },
        };
    }

    const data = {
        numIdentificacion,
        nombreImagen,
        fecha,
    };

    const url = "http://localhost:3000/imagenes/"+numIdentificacion+nombreImagen;
    console.log(url);

    let requestOptions = {
        method: "PUT",
        headres: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

    const c = await fetch(url, requestOptions)
        .then((response) => {
            const b = response.json().then((a) => {
                console.log(a);
                return a
            });
            return b;
         })
        .catch((error) => {
            return {
                ok: false,
                result: {
                    message: "Error en la consulta: " + error,
                },
            };
        });

    return c;
}