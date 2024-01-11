import noUiSlider from "nouislider";


(function () {
  const a = document.querySelectorAll(".range-slider");
  for (let e = 0; e < a.length; e++) {
    (function (e) {
      const t = a[e].querySelector(".range-slider__body");
      const r = a[e].querySelector(".range-slider__input--min");
      const n = a[e].querySelector(".range-slider__input--max");

      const dataAttributes = {
        dataStartMin: parseInt(a[e].dataset.startMin, 10),
        dataStartMax: parseInt(a[e].dataset.startMax, 10),
        dataMin: parseInt(a[e].dataset.min, 10),
        dataMax: parseInt(a[e].dataset.max, 10),
        dataStep: parseInt(a[e].dataset.step, 10)
      };

      noUiSlider.create(t, {
        start: [dataAttributes.dataStartMin, dataAttributes.dataStartMax],
        connect: true,
        step: dataAttributes.dataStep,
        pips: {
          mode: "count",
          values: 5
        },
        tooltips: true,
        range: {
          min: dataAttributes.dataMin,
          max: dataAttributes.dataMax
        },
        format: {
          to: function (value) {
            return "грн" + parseInt(value, 10);
          },
          from: function (value) {
            return Number(value);
          }
        }
      });

      if (r !== null && n !== null) {
        t.noUiSlider.on("update", function (values, handle) {
          const value = values[handle].replace(/\D/g, "");
          if (handle) {
            n.value = Math.round(value);
          } else {
            r.value = Math.round(value);
          }
        });

        r.addEventListener("change", function () {
          t.noUiSlider.set([this.value, null]);
        });

        n.addEventListener("change", function () {
          t.noUiSlider.set([null, this.value]);
        });
      }
    })(e);
  }
})();
