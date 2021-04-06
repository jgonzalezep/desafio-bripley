
public class Ciudad {

	private String ip;
    private String country_code;
    private String country_name;
    private String region_code;
    private String region_name;
    private String city;
    private String zip_code;
    private String time_zone;
    private Double latitude;
    private Double longitude;
    private Number metro_code;



	public Ciudad() {}
	
	public Ciudad(String ip, String city, Double latitude, Double longitude) {
		super();
		this.ip = ip;
		this.city = city;
		this.latitude = latitude;
        this.longitude = longitude;
	}
	
	public String getIp() {
		return ip;
	}
	
    public String getCity() {
		return city;
	}

    public Double getLatitude() {
		return latitude;
	}

    public Double getLongitude() {
		return longitude;
	}
	
	
	
}
