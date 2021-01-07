<template>
  <div class="bio">
    <b-row>
      <b-col align="left" cols="12" style="padding-top: 64px;">
        <h3>Aleksandra <br> Ewa <br> Nowak</h3>
        <h4>Painter, visual artist</h4>
      </b-col>
      <b-col align="left" cols="12" style="padding-top: 32px;">        
        <p>Born on 23.02.1991 in Warsaw (Poland)<br>
        Lives and works in Genoa, Italy</p>
        <p>
          Graduated in set design from the Fine Art Accademy in Genoa
          (Italy)
          <br> 
          The title of the thesis: “The sign and gesture in music and in visual arts”, got
          maximum of votes with honours.
        </p>
      </b-col>
      <b-col align="left" cols="12" style="padding-top: 24px;">
        <h5>Exhibitions</h5>
        <ul v-for="event in events" :key="event.index">
          <li class="event">
            <p class="event__date">{{ event.date }}</p>          
            <p class="event__place">{{ event.place }}</p>
            <p class="event__description">{{ event.description }}</p>
          </li>
        </ul>        
        
        <p>
          
         
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
b-col {
  padding-top: 32px;
}
.event {
  margin-bottom: 8px;
}
.event__date {
  font-weight: bold;
  font-size: 0.8em;
  margin-bottom: 2px;
  text-align: left;
}
.event__place {
  font-style: italic;
  font-size: 0.8em;
  margin-bottom: 4px;
}
.event__description {
  /* font-size: 0.8em; */
  /* text-align: right; */
}
</style>
<script>
export default {
  name: 'Bio',
  components: {
  },
  data: function () {
    return {
      events: [
        {
          date: 'January 2020',
          place: 'Palazzo Ducale, Sala Dogana, Genoa',
          description: `
            Collective exhibition "Stocks"
          `
        },
        {
          date: 'May 2019 - September 2019',
          place: 'Castello d’Albertis, Genoa',
          description: `
            Collective exhibition 
            "Landscapes from within / Paesaggi interiori"
          `
        },
        {
          date: 'June 2019',
          place: 'Sala Dogana, Palazzo Ducale, Genoa',
          description: `
            Collective exhibition “Frammenti del contemporaneo”
          `
        },
        {
          date: 'June 2016',
          place: 'Subseri Gallery, Milan',
          description: `
            Solo exhibition
          `
        },
        {
          date: '2015 - 2017',
          place: 'La Scala Theater, Milan',
          description: `
            Actress
          `
        },
        {
          date: 'June 2015',
          place: 'Palazzo Ducale, Genoa',
          description: `
            Exhibition of her thesis in Sala Dogana
          `
        },
        {
          date: 'March 2014 - April 2015',
          place: 'Genoa',
          description: `
            Stage with ONLUS Teatro Necessario and Teatro della Tosse as
            costume designer and set designer for theater shows, some of them with prisoners from
            Marassi prison as actors
          `
        },
        {
          date: 'September 2014',
          place: 'Artre Gallery Bruna Solinas, Genoa',
          description: `
            Winner of the grant in painting “10 allo start” and further the exhibition at the gallery
          `
        },
        {
          date: 'May 2014 - June 2014',
          place: 'Museum Galata del Mare, Genoa',
          description: `
            Winner of the grant for painting and further the collective
            exhibition “Torre Piloti”
          `
        },
        {
          date: 'November 2013',
          place: 'Foyer of Teatro della Corte, Genoa',
          description: `
            Collective exhibition
          `
        },
        {
          date: 'June 2012',
          place: 'Osieck, Warsaw',
          description: `
            Collective exhibition at  after workshop en plein air curated by
            Kuba Cwieczkowski & Marcin Cabak
          `
        },
        {
          date: 'September 2010',
          place: 'Contemporary Art Center of Masovia, Radom, Warsaw',
          description: `
            Collective exhibition
          `
        },
        {
          date: '2002',
          place: 'Pio church, Ojciec, Warsaw',
          description: `
            Violin concerts in 
          `
        },
        {
          date: '2002 - 2003',
          place: 'Otwock and Pyry (Poland)',
          description: `
            Violin concerts curated by Anna Baranska
          `
        }
      ]
    }
  }
}
</script>