(function() {

  d3.select("#step-two")
    .on('stepin', function () {
      d3.select("#columbia-image")
        .attr("src", "images/data3.jpg")
    })

  d3.select("#step-one")
    .on('stepin', function () {
      d3.select("#columbia-image")
        .attr("src", "images/data1.jpg")
    })

    d3.select("#step-three")
      .on('stepin', function () {
        d3.select("#columbia-image")
          .attr("src", "images/data2.jpg")
      })
      d3.select("#step-four")
        .on('stepin', function () {
          d3.select("#columbia-image")
            .attr("src", "images/example1.jpg")
        })
        d3.select("#step-five")
          .on('stepin', function () {
            d3.select("#columbia-image")
              .attr("src", "images/example2.jpg")
          })
          d3.select("#step-six")
            .on('stepin', function () {
              d3.select("#columbia-image")
                .attr("src", "images/example3.jpg")
            })
      d3.select("#step-seven")
        .on('stepin', function () {
          d3.select("#columbia-image")
            .attr("src", "images/data5.jpg")
        })
})()
