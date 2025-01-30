import car from '../src/assets/cpu.png'
import gps from '../src/assets/gps.png'
import speedometer from '../src/assets/speedometer.png'
import keyPro from '../src/assets/key.png'
import altineter from '../src/assets/alternator.png'
import self from '../src/assets/self.png'
import mec from '../src/assets/mec.png'
import remote from '../src/assets/vehicle.png'


const ServicesDetails = [
    {
        img: car,
        title: "ECM Diagnostics",
        overview: "Engine Control Module (ECM) ki advanced diagnostics se hum engine performance aur faults ka detailed analysis karte hain. Har error code ko identify karke, timely solutions provide karte hain.",
        features: {
            first: "Accurate fault detection",
            second: "Advanced tools for error resolution",
        }
    },

    {
        img: keyPro,
        title: "Key Programming",
        overview: "Car keys ka advanced programming aur lost keys ke solutions. Remote-controlled keys aur smart key systems ka secure setup karte hain.",
        features: {
            first: "Duplicate key creation",
            second: "Smart and remote key solutions",
        }
    },

    {
        img: remote,
        title: "Remote Services",
        overview: "Car remotes ki repairing aur reprogramming se locking system ko seamless aur reliable banate hain. Advanced remote installation bhi available hai.",
        features: {
            first: "Remote locking system setup",
            second: "Faulty remotes repair",
        }
    },

    {
        img: self,
        title: "Self-Starter Repair",
        overview: "Self-starter motor ki inspection aur repairing services, jo ignition system ko reliable banakar smooth startup ensure karta hai.",
        features: {
            first: "Motor repair and maintenance",
            second: "Reliable ignition solutions",
        }
    },
    {
        img: altineter,
        title: "Alternator Repair",
        overview: "Alternator inspection aur repairing service jo battery charging aur car electrical system ki efficiency badhata hai.",
        features: {
            first: "Battery health improvement",
            second: "Efficient charging system",
        }
    },

    {
        img: mec,
        title: "Car Wiring Solutions",
        overview: "Custom wiring solutions aur faulty wiring repair. High-quality wiring se car ke electrical systems ko safe aur efficient banate hain.",
        features: {
            first: "Custom wiring setup",
            second: "Safe and durable connections",
        }
    },

    {
        img: gps,
        title: "GPS Device Installation",
        overview: "Advanced GPS devices ka installation jo real-time tracking aur location monitoring provide karta hai. Travel aur fleet management ke liye perfect solution.",
        features: {
            first: "Real-time location tracking",
            second: "Reliable GPS integration",
        }
    },
    {
        img: speedometer,
        title: "Dashboard Meter Repair",
        overview: "Dashboard meters jaise speedometer, fuel gauge aur RPM meter ki servicing aur calibration. Accurate aur reliable readings ensure karte hain.",
        features: {
            first: "Precision calibration",
            second: "Complete dashboard solutions",
        }
    },
];

export default ServicesDetails;