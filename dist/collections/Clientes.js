"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isAdmin_1 = require("../access/isAdmin");
var Clientes = {
    slug: 'clientes',
    admin: {
        useAsTitle: 'Nombre',
    },
    access: {
        // Only admins can create users
        create: isAdmin_1.isAdmin,
        // Only admins can delete
        delete: isAdmin_1.isAdmin,
    },
    fields: [
        {
            name: 'Nombre_Legal',
            type: 'text',
            access: {
                // Only admins can create or update a value for this field
                create: isAdmin_1.isAdminFieldLevel,
                read: isAdmin_1.isAdminFieldLevel,
                update: isAdmin_1.isAdminFieldLevel,
            },
        },
        {
            name: 'Nombre',
            type: 'text',
        },
        {
            name: 'Rubro',
            type: 'text',
            access: {
                // Only admins can create or update a value for this field
                create: isAdmin_1.isAdminFieldLevel,
                read: isAdmin_1.isAdminFieldLevel,
                update: isAdmin_1.isAdminFieldLevel,
            },
        },
        {
            name: 'Calle',
            type: 'text',
        },
        {
            name: 'Numero_De_Calle',
            type: 'text',
        },
        {
            name: 'Piso',
            type: 'text',
        },
        {
            name: 'Ciudad',
            type: 'text',
        },
        {
            name: 'Zona',
            type: 'text',
        },
        {
            name: 'Distribuye',
            type: 'text',
            access: {
                // Only admins can create or update a value for this field
                create: isAdmin_1.isAdminFieldLevel,
                read: isAdmin_1.isAdminFieldLevel,
                update: isAdmin_1.isAdminFieldLevel,
            },
        },
        {
            name: 'Cabecera',
            type: 'text',
            access: {
                // Only admins can create or update a value for this field
                create: isAdmin_1.isAdminFieldLevel,
                read: isAdmin_1.isAdminFieldLevel,
                update: isAdmin_1.isAdminFieldLevel,
            },
        },
        {
            name: 'Provincia',
            type: 'text',
        },
        {
            name: 'Categoria_De_Iva',
            type: 'text',
        },
        {
            name: 'Cierre',
            type: 'text',
            access: {
                // Only admins can create or update a value for this field
                create: isAdmin_1.isAdminFieldLevel,
                read: isAdmin_1.isAdminFieldLevel,
                update: isAdmin_1.isAdminFieldLevel,
            },
        },
        {
            name: 'Segmentacion',
            type: 'text',
            access: {
                // Only admins can create or update a value for this field
                create: isAdmin_1.isAdminFieldLevel,
                read: isAdmin_1.isAdminFieldLevel,
                update: isAdmin_1.isAdminFieldLevel,
            },
        },
        {
            name: 'Observaciones',
            type: 'text',
            access: {
                // Only admins can create or update a value for this field
                create: isAdmin_1.isAdminFieldLevel,
                read: isAdmin_1.isAdminFieldLevel,
                update: isAdmin_1.isAdminFieldLevel,
            },
        },
        {
            name: 'imagen1',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'imagen2',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'imagen3',
            type: 'upload',
            relationTo: 'media',
        }
    ],
};
exports.default = Clientes;
