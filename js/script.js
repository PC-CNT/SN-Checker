
window.addEventListener("load", () => {

    const select_console = document.querySelector(`#select_console`);
    const input_SN = document.querySelector(`#input_sn`);
    const output = document.querySelector(`#output`);

    
    function SFC(SN) {
        return `SFC工事中……`;
    }

    function Wii(SN) {
        if (SN.match(/^LJF[0-9]{9,10}/)) {
            if (Number(SN.replace(/^[a-zA-Z]{2,3}/, "")) < 147500000) {
                return `${SN}は神機です（多分）！`
            }
            return `${SN}は神機ではないです（多分）！`
        }
        if (SN.match(/^/)) {
            ;
        }
        return `${SN}は無効なS/Nです！`
    }

    function PSP(SN) {
        return `PSP工事中……`;
    }

    function check(Serial_Number) {
        Serial_Number = Serial_Number.replace(/\s+/, "")
        if (!Serial_Number) {
            return ``;
        }
        Serial_Number = Serial_Number.toUpperCase();
        if (select_console.value === "SFC") {
            return SFC(Serial_Number);
        }
        if (select_console.value === "Wii") {
            return Wii(Serial_Number);
        }
        return `${Serial_Number}は無効なS/Nです！`;
    }

    function guess(Serial_Number) {
        if (Serial_Number.match(/^[a-zA-Z]{1,2}[0-9]{8}/)) {
            select_console.options[0].selected = true;
        }
        if (Serial_Number.match(/^[a-zA-Z]{2,3}[0-9]{9,10}/)) {
            select_console.options[1].selected = true;
        }
    }

    input_SN.addEventListener("input", function() {
        guess(this.value);
        output.innerHTML = check(this.value);
    });
    select_console.addEventListener("change", function() {
        output.innerHTML = check(input_SN.value);
    })
})

