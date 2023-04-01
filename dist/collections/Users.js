"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isAdmin_1 = require("../access/isAdmin");
var isAdminOrSelf_1 = require("../access/isAdminOrSelf");
var Users = {
    slug: 'users',
    auth: true,
    admin: {
        useAsTitle: 'email',
    },
    access: {
        // Only admins can create users
        create: isAdmin_1.isAdmin,
        // Admins can read all, but any other logged in user can only read themselves
        read: isAdminOrSelf_1.isAdminOrSelf,
        // Admins can update all, but any other logged in user can only update themselves
        update: isAdminOrSelf_1.isAdminOrSelf,
        // Only admins can delete
        delete: isAdmin_1.isAdmin,
    },
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'firstName',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'lastName',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'roles',
            // Save this field to JWT so we can use from `req.user`
            saveToJWT: true,
            type: 'select',
            hasMany: true,
            defaultValue: ['editor'],
            access: {
                // Only admins can create or update a value for this field
                create: isAdmin_1.isAdminFieldLevel,
                update: isAdmin_1.isAdminFieldLevel,
            },
            options: [
                {
                    label: 'Admin',
                    value: 'admin',
                },
                {
                    label: 'Transmisor',
                    value: 'editor',
                },
            ]
        },
        {
            name: 'observaciones',
            // Save this field to JWT so we can use from `req.user`
            saveToJWT: true,
            type: 'textarea',
            access: {
                // Only admins can create or update a value for this field
                create: isAdmin_1.isAdminFieldLevel,
                read: isAdmin_1.isAdminFieldLevel,
                update: isAdmin_1.isAdminFieldLevel,
            },
            admin: {
                condition: function (_a) {
                    var roles = _a.roles;
                    return roles && !roles.includes('admin');
                },
                description: 'This field sets which sites that this user has access to.'
            }
        }
    ],
};
exports.default = Users;
