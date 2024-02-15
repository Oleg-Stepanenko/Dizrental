let dpMin, dpMax;

        dpMin = new AirDatepicker('#airdatepicker1', {
            buttons: ['today', 'clear'],
            autoClose: true,
            onSelect({ date }) {
                dpMax.update({
                    minDate: date
                })
            }
        })

        dpMax = new AirDatepicker('#airdatepicker2', {
            buttons: ['today', 'clear'],
            autoClose: true,
            onSelect({ date }) {
                dpMin.update({
                    maxDate: date
                })
            }
        })