import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})

public class Example {

    @RequestMapping("/")
    Object home() {
        RestTemplate restTemplate = new RestTemplate();
        Ciudad city = restTemplate.getForObject("https://freegeoip.app/json/", Ciudad.class);
        return city;
    }

    public static void main(String[] args) throws Exception {
        SpringApplication.run(Example.class, args);
    }

}
