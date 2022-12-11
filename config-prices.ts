export const pricesPlanes = (locale) => {

  const planes = [];

  planes['es'] = [
    {
      namePlan: 'Plan Básico',
      price: '0',
      type: 'mes',
      icon: '$',
      list: [
        'Clases sin moderador',
        '2 Clases máximas al mes'
      ],
      link: ''
    },{
      namePlan: 'Plan Full',
      price: '15.900',
      icon: '$',
      type: 'mes',
      list: [
        'Clases con moderador',
        '4 Clases máximas al mes'
      ],
      link: ''
    }
  ]

  planes['en'] = [
    {
      namePlan: 'Plan Basic',
      price: '0',
      icon: '$',
      type: 'month',
      list: [
        'Unmoderated classes',
        '2 Classes maximum per month'
      ],
      link: ''
    },{
      namePlan: 'Plan Fully',
      price: '15',
      icon: '$',
      type: 'month',
      list: [
        'Moderated classes',
        '4 Class per month'
      ],
      link: ''
    }
  ]


  return planes[locale]
} 