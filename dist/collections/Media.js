"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isAdmin_1 = require("../access/isAdmin");
var Media = {
    slug: 'media',
    upload: {
        staticURL: '/media',
        staticDir: 'media',
        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: 300,
                position: 'centre',
            },
            {
                name: 'tablet',
                width: 1024,
                // By specifying `undefined` or leaving a height undefined,
                // the image will be sized to a certain width,
                // but it will retain its original aspect ratio
                // and calculate a height automatically.
                height: undefined,
                position: 'centre',
            },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
    access: {
        // Only admins can create users
        create: isAdmin_1.isAdmin,
        // Admins can read all, but any other logged in user can only read themselves
        read: isAdmin_1.isAdmin,
        // Admins can update all, but any other logged in user can only update themselves
        update: isAdmin_1.isAdmin,
        // Only admins can delete
        delete: isAdmin_1.isAdmin,
    },
    fields: [],
};
exports.default = Media;
