package bookstore

import com.ociweb.Book
import com.ociweb.Inventory

class BootStrap {

    def init = { servletContext ->

        if(!Book.list()) {

            def book1 = new Book(author: "Jeff Brown", inventory: new Inventory(number: '001'), title: "Definitive Guide to Grails")
            def book2 = new Book(author: "Scott Davis", inventory: new Inventory(number: '002'),title: "Groovy Recipes")

            book1.save(flush: true)
            book2.save(flush: true)
        }


        println Book.count

    }
    def destroy = {
    }
}
