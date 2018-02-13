class User {
    constructor (name, username, email, gender, country, city, description) {
        this.name = name; // Capturar valores del formulario al instanciar el objeto. 
        this.username = username;
        this.email = email;
        this.gender = gender;
        this.country = country;
        this.city = city;
        this.description = description
    } // Fin constructor

    createPost() {
        return new Post // ¿Especificar parámetros de la instancia?
    }

    deletePost() {
        //Borrar post... ¿pero cómo?
    }
} //Fin clase User

class Post extends User {
    constructor (title, text, author) {
        super(author);
        this.title = title;
        this.text = text;
    } // Fin constructor

    // Duda: herencia en métodos.
    publishPost(postTitle,postAuthor,postDate,postText) {
        this.title = title;
        this.author = author;
        this.date = new Date;
        this.text = text;
    }
}

class Comment extends Post {
    constructor (text, author) {
        super(author); // ¿Heredar un atributo ya heredado antes? ¿Y cómo hago si es otro usuario?
        this.text = text;
    }
} // Fin clase