document.getElementById("agregar").addEventListener('click', () => {
    var valueId = document.getElementById("idInv").value;
    const nombre = document.getElementById("description").value;
    const marca = document.getElementById("stock").value;
    const cantidad = document.getElementById("value").value;
    const costo = document.getElementById("stockMin").value;

            const data1 = {
                code: valueId,
                description: nombre,
                stock: marca-1,
                value: cantidad,
                stockMin: costo,
            };

            
            const tablaBody = document.getElementById("tablaBody");
            const newRow = document.createElement("tr");

            if(stock>0){
            Object.values(data1).forEach(value => {
                const newCell = document.createElement("td");
                newCell.textContent = value;
                newRow.appendChild(newCell);
            });

            tablaBody.appendChild(newRow);
        }
        else{
            alert("acabo el stock")
        }
        
        });