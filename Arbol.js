class Nodo {
    constructor(usuario) {
      this.usuario = usuario;
      this.izquierda = null;
      this.derecha = null;
    }
  }
  
  class ArbolUsuarios {
    constructor() {
      this.raiz = null;
    }
  
    insertar(usuario) {
      this.raiz = this._insertarRec(this.raiz, usuario);
    }
  
    _insertarRec(raiz, usuario) {
      if (raiz === null) {
        return new Nodo(usuario);
      }
  
      if (usuario.id < raiz.usuario.id) {
        raiz.izquierda = this._insertarRec(raiz.izquierda, usuario);
      } else if (usuario.id > raiz.usuario.id) {
        raiz.derecha = this._insertarRec(raiz.derecha, usuario);
      }
  
      return raiz;
    }
  
    buscar(id) {
      return this._buscarRec(this.raiz, id);
    }
  
    _buscarRec(raiz, id) {
      if (raiz === null || raiz.usuario.id === id) {
        return raiz;
      }
  
      if (id < raiz.usuario.id) {
        return this._buscarRec(raiz.izquierda, id);
      }
  
      return this._buscarRec(raiz.derecha, id);
    }
  
    eliminar(id) {
      this.raiz = this._eliminarRec(this.raiz, id);
    }
  
    _eliminarRec(raiz, id) {
      if (raiz === null) {
        return raiz;
      }
  
      if (id < raiz.usuario.id) {
        raiz.izquierda = this._eliminarRec(raiz.izquierda, id);
      } else if (id > raiz.usuario.id) {
        raiz.derecha = this._eliminarRec(raiz.derecha, id);
      } else {
        if (raiz.izquierda === null) {
          return raiz.derecha;
        } else if (raiz.derecha === null) {
          return raiz.izquierda;
        }
  
        raiz.usuario.id = this._encontrarMinimo(raiz.derecha).usuario.id;
        raiz.derecha = this._eliminarRec(raiz.derecha, raiz.usuario.id);
      }
  
      return raiz;
    }
  
    _encontrarMinimo(raiz) {
      while (raiz.izquierda !== null) {
        raiz = raiz.izquierda;
      }
      return raiz;
    }
  
    actualizar(id, nuevoUsuario) {
      this.eliminar(id);
      this.insertar(nuevoUsuario);
    }
  }
  