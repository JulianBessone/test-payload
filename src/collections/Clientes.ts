import { CollectionConfig } from 'payload/types';

const Clientes:CollectionConfig = {
    slug: 'clientes',
    admin: {
      useAsTitle: 'Nombre',
    },
    fields: [
      {
        name: 'Nombre_Legal',
        type: 'text',
      },
      {
        name: 'Nombre',
        type: 'text',
      },
      {
        name: 'Rubro',
        type: 'text',
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
      },
      {
        name: 'Cabecera',
        type: 'text',
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
      },
      {
        name: 'Segmentacion',
        type: 'text',
      },
      {
        name: 'Observaciones',
        type: 'text',
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