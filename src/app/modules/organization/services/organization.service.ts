import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {OrganizationDto} from "../interfaces/organization";
import {BASE_URL} from "../../../token";

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  private readonly baseUrl: string | undefined;

  constructor(
    @Inject(BASE_URL) baseUrl: string,
    private httpClient: HttpClient
  ) {
    this.baseUrl = baseUrl
  }

  public getOrganizations(filter: string = ''): Observable<any> {
    return this.httpClient.get<OrganizationDto[]>(`${this.baseUrl}/organizations?q=${filter}`)
  }

  public createOrganization(Organization: OrganizationDto): Observable<OrganizationDto> {
    return this.httpClient.post<OrganizationDto>(`${this.baseUrl}/organizations`, Organization)
  }

  public updateOrganization(Organization: OrganizationDto, OrganizationId: number): Observable<OrganizationDto> {
    return this.httpClient.put<OrganizationDto>(`${this.baseUrl}/organizations/${OrganizationId}`, Organization)
  }
}
