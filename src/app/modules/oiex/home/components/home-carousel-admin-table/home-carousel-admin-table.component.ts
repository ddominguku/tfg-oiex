import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ConfirmationService, MessageService } from "primeng/api";
import { CarouselModel } from "../../models/carousel.model";
import { CarouselService } from "../../services/carousel.service";

@Component({
  selector: "app-home-carousel-admin-table",
  templateUrl: "./home-carousel-admin-table.component.html",
  styleUrls: ["./home-carousel-admin-table.component.css"],
  providers: [MessageService, ConfirmationService],
})
export class HomeCarouselAdminTableComponent implements OnInit {
  public carouselsList: CarouselModel[] = [];
  public selectedcarousels: CarouselModel[] = [];
  public carouselDialog: boolean;
  public carouselNew: CarouselModel = new CarouselModel();
  public carouselForm: FormGroup;

  constructor(
    private carouselService: CarouselService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadcarousels();
    this.initForm();
  }

  /**
   * @Description Initialise the carousel form
   */
   private initForm() {
    this.carouselForm = this.formBuilder.group({
      id: [""],
      name: ["", [Validators.required]],
      url: ["", [Validators.required]],
    });
  }


  /**
   * Load all carousels
   */
  private loadcarousels() {
    this.carouselService
      .getAll()
      .subscribe((carouselsReturn: CarouselModel[]) => {
        this.carouselsList = [...carouselsReturn];
        console.log(this.carouselsList);
      });
  }

  /**
   * Open dialog for add new carousel
   */
  public openNew() {
    this.carouselForm.reset();
    this.carouselNew = new CarouselModel();
    this.carouselDialog = true;
  }

  /**
   * Close dialog
   */
  public cancelDialog() {
    this.carouselNew = new CarouselModel();
    this.carouselDialog = false;
  }

  /**
   * Add new carousel in table
   */
  public addcarousel() {
    this.carouselNew = this.carouselForm.value;
    this.carouselService
      .createCarousel(this.carouselNew)
      .subscribe((carouselCreated: CarouselModel) => {
        console.log(carouselCreated);
        this.messageService.add({
          severity: "success",
          summary: "Añadido",
          detail: "Imagen añadida con éxito",
          life: 3000,
        });
        this.carouselDialog = false;
        this.loadcarousels();
      });
  }

  /**
   * Edit carousel in table
   * @param carousel To edit
   */
  public editCarousel(carousel: CarouselModel) {
    this.carouselNew = { ...carousel };
    this.carouselForm.setValue(carousel);
    this.carouselDialog = true;
  }

  /**
   * Delete carousel in table
   * @param carouselDelete To delete
   */
  public deleteCarousel(carouselDelete: CarouselModel) {
    this.confirmationService.confirm({
      message: "¿Está seguro de borrar la imagen seleccionada?",
      header: "Confirmar",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.carouselService
          .deleteCarousel(carouselDelete.id)
          .subscribe((carouselReturn: CarouselModel) => {
            console.log(carouselReturn);
            this.messageService.add({
              severity: "success",
              summary: "Eliminada",
              detail: "Imagen eliminada con éxito",
              life: 3000,
            });
            this.loadcarousels();
          });
        this.selectedcarousels = null;
      },
    });
  }
}
