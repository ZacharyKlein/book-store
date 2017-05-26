package bookstore

import com.ociweb.Book

class BootStrap {

    def init = { servletContext ->

        if(!Book.list()) {

            def book1 = new Book(author: "Jeff Brown", title: "Definitive Guide to Grails")
            def book2 = new Book(author: "Scott Davis", title: "Groovy Recipes")

            book1.save(flush: true)
            book2.save(flush: true)
        }

    }
    def destroy = {
    }
}
