import { CollectionConfig } from 'payload/types';
import { isAdmin, isAdminFieldLevel } from '../access/isAdmin';
import { isAdminOrSelf } from '../access/isAdminOrSelf';

const Clientes:CollectionConfig = {
    slug: 'clientes',
    admin: {
      useAsTitle: 'Nombre',
    },
    access: {
        // Only admins can create users
        create: isAdmin,

        // Only admins can delete
        delete: isAdmin,
    },
    fields: [
      {
        name: 'Nombre_Legal',
        type: 'text',
        access: {
            // Only admins can create or update a value for this field
            create: isAdminFieldLevel,
            read: isAdminFieldLevel,
            update: isAdminFieldLevel,
            
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
            create: isAdminFieldLevel,
            read: isAdminFieldLevel,
            update: isAdminFieldLevel,
            
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
            create: isAdminFieldLevel,
            read: isAdminFieldLevel,
            update: isAdminFieldLevel,
            
        },
      },
      {
        name: 'Cabecera',
        type: 'text',
        access: {
            // Only admins can create or update a value for this field
            create: isAdminFieldLevel,
            read: isAdminFieldLevel,
            update: isAdminFieldLevel,
            
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
            create: isAdminFieldLevel,
            read: isAdminFieldLevel,
            update: isAdminFieldLevel,
            
        },
      },
      {
        name: 'Segmentacion',
        type: 'text',
        access: {
            // Only admins can create or update a value for this field
            create: isAdminFieldLevel,
            read: isAdminFieldLevel,
            update: isAdminFieldLevel,
            
        },
      },
      {
        name: 'Observaciones',
        type: 'text',
        access: {
            // Only admins can create or update a value for this field
            create: isAdminFieldLevel,
            read: isAdminFieldLevel,
            update: isAdminFieldLevel,
            
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
  }
  
  export default Clientes;