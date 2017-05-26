package com.ociweb

import grails.rest.Resource

@Resource(uri='/api/book')
class Book {

    String title
    String author

    Inventory inventory

    static constraints = {
        inventory nullable: true
    }
}
