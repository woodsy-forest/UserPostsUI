import { GeoDto } from './GeoDto';

export class AddressDto {
    public Street: string;
    public Suite: string;
    public City: string;
    public Zipcode: string;
    public Geo: GeoDto;
}