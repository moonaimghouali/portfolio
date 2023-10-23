 const message = {
    name: 'message',
    type: 'document',
    title: 'Message',
    fields: [
      {
        name: 'date',
        type: 'date',
        title: 'Date',
        options: {
            dateFormat: 'YYYY-MMM-DD',
        }
      },

      {
        name: 'message',
        type: 'string',
        title: 'Message',
        validation: Rule => Rule.max(250).warning(`A title shouldn't be more than 250 characters.`)
      },
    ]
  }

  export  default  message