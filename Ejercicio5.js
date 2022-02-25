//Clase persona
class Persona {
    constructor(nombre, edad, calificación) {
        this.nombre = nombre;
        this.edad = edad;
        this.calificación = calificación;
        this.metodo = function obtDetalles() {
            document.write("Nombre: " + this.nombre + "<br>" +
                "Edad: " + this.edad + "<br>" +
                "Calificación: " + Math.floor(Math.random() * 10) + "<br>");
        }
    }
}
    var docu1 = new Persona("María","35","10");
        docu1.metodo();

    var docu2 = new Persona("Karla","40","8");
        docu2.metodo();

    var docu3 = new Persona("Dante","18","7");
        docu3.metodo();

    var docu4 = new Persona("Fernando","20","9");
        docu4.metodo();

    var docu5 = new Persona("Ana","23","6");
        docu5.metodo();
    
    var docu6 = new Persona("Mauricio","22","10");
        docu6.metodo();

  
  //clase estudiante
class Estudiante {
    constructor(curso, grupo) {
        this.curso = curso;
        this.grupo = grupo;
        this.metodo1 = function registro() {
            document.write("Curso: " + this.curso + "<br>" +
                "Grupo: " + this.grupo + "<br>");
        }
    }
}
    var docu2 = new Estudiante("JS","Programación");
      docu2.metodo1();
  
  //Clase profesor
class Profesor {
    constructor(asignatura, nivel) {
        this.asignatura = asignatura;
        this.nivel = nivel;
        this.metodo2 = function asignación() {
            document.write("Asignatura: " + this.asignatura + "<br>" +
                "Nivel: " + this.nivel + "<br>");
        }
    }
}
    var docu3 = new Profesor("JS","Básico");
      docu3.metodo2();
  
 
  //Clase grupo
class Grupo {
    constructor(Profesor, calificación, Estudiante) {
        this.Profesor = Profesor;
        this.calificación = calificación;
        this.Estudiante = Estudiante;
        this.metodo3= function asignación(){
            document.write("Profesor: " + this.profesor + "<br>" +
            "Calificación: " + this.calificación + "<br>" + "Estudiante: " + this.Estudiante
            + "<br>");
    }
}
        }
        var arrayEstudiantes = [
            {
              nombre: "María",
             calificación: 10
            },
            {
              nombre: "Karla",
              calificación: 8
            },
            {
              nombre: "Dante",
              calificación: 7
            },
            {
              nombre: "Fernando",
              calificación: 9
            },
            {
              nombre: "Ana",
              calificación: 6
            },
            {
              nombre: "Mauricio",
              calificación: 10
            }
          ];
          
            var sumatoriaObjeto = arrayEstudiantes.reduce(function(acumulador, siguienteValor){
              return {
                calificación: acumulador.calificación + siguienteValor.calificación
              };
            }, {calificación: 0}); 
            
            var promediocalificación = sumatoriaObjeto.edad / arrayEstudiantes.length;
        