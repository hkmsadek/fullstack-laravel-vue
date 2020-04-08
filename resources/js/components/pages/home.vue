<template>
    <div>
       <div class="content">
			<div class="container-fluid">
				<div class="row">
					<div class="col-12 col-md-3">
						<div class="_1adminOverveiw_card _box_shadow _border_radious _mar_b30 _1adminOverveiw_bg_one">
							<div class="_1adminOverveiw_card_left">
								<p class="_1adminOverveiw_card_left_num">3</p>

								<p class="_1adminOverveiw_card_left_title">Today's News</p>
							</div>
							<div class="_1adminOverveiw_card_right">
								<Icon type="ios-paper" />
							</div>
						</div>
					</div>

					<div class="col-12 col-md-3">
						<div class="_1adminOverveiw_card _box_shadow _border_radious _mar_b30 _1adminOverveiw_bg_two">
							<div class="_1adminOverveiw_card_left">
								<p class="_1adminOverveiw_card_left_num">29</p>

								<p class="_1adminOverveiw_card_left_title">Total News</p>
							</div>
							<div class="_1adminOverveiw_card_right">
								<Icon type="ios-paper-outline" />
							</div>
						</div>
					</div>

					<div class="col-12 col-md-3">
						<div class="_1adminOverveiw_card _box_shadow _border_radious _mar_b30 _1adminOverveiw_bg_two">
							<div class="_1adminOverveiw_card_left">
								<p class="_1adminOverveiw_card_left_num">29</p>

								<p class="_1adminOverveiw_card_left_title">Features News</p>
							</div>
							<div class="_1adminOverveiw_card_right">
								<Icon type="md-copy" />
							</div>
						</div>
					</div>

					<div class="col-12 col-md-3">
						<div class="_1adminOverveiw_card _box_shadow _border_radious _mar_b30 _1adminOverveiw_bg_two">
							<div class="_1adminOverveiw_card_left">
								<p class="_1adminOverveiw_card_left_num">29</p>

								<p class="_1adminOverveiw_card_left_title">Card News</p>
							</div>
							<div class="_1adminOverveiw_card_right">
								<Icon type="md-list-box" />
							</div>
						</div>
					</div>
				</div>	
				<!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
				<div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
					<p class="_title0">Recent News</p>

					<div class="_overflow _table_div">
						<table class="_table">
								<!-- TABLE TITLE -->
							<tr>
								<th>Date</th>
								<th>Title</th>
								<th>Category</th>
								<th>Action</th>
							</tr>
								<!-- TABLE TITLE -->


								<!-- ITEMS -->
							<tr>
								<td>25-05-19</td>
								<td class="_table_name">Manhattan's art center "Shed" opening ceremony</td>
								<td>Economy</td>
								<td>
									<button class="_btn _action_btn view_btn1" type="button">View</button>
									<button class="_btn _action_btn edit_btn1" type="button">Edit</button>
									<button class="_btn _action_btn make_btn2" type="button">Make Features</button>
									<button class="_btn _action_btn make_btn3" type="button">Make Card</button>
									<button class="_btn _action_btn make_btn1" type="button">Delete</button>
								</td>
							</tr>
								<!-- ITEMS -->

								<!-- ITEMS -->
							<tr>
								<td>25-05-19</td>
								<td class="_table_name">Are Trump era is having an impact on what 's future voters</td>
								<td>Social</td>
								<td>
									<button class="_btn _action_btn view_btn1" type="button">View</button>
									<button class="_btn _action_btn edit_btn1" type="button">Edit</button>
									<button class="_btn _action_btn make_btn2" type="button">Make Features</button>
									<button class="_btn _action_btn make_btn3" type="button">Make Card</button>
									<button class="_btn _action_btn make_btn1" type="button">Delete</button>
								</td>
							</tr>
								<!-- ITEMS -->

										<!-- ITEMS -->
							<tr>
								<td>25-05-19</td>
								<td class="_table_name">Manhattan's art center "Shed" opening ceremony</td>
								<td>Economy</td>
								<td>
									<button class="_btn _action_btn view_btn1" type="button">View</button>
									<button class="_btn _action_btn edit_btn1" type="button">Edit</button>
									<button class="_btn _action_btn make_btn2" type="button">Make Features</button>
									<button class="_btn _action_btn make_btn3" type="button">Make Card</button>
									<button class="_btn _action_btn make_btn1" type="button">Delete</button>
								</td>
							</tr>
								<!-- ITEMS -->

								<!-- ITEMS -->
							<tr>
								<td>25-05-19</td>
								<td class="_table_name">Are Trump era is having an impact on what 's future voters</td>
								<td>Social</td>
								<td>
									<button class="_btn _action_btn view_btn1" type="button">View</button>
									<button class="_btn _action_btn edit_btn1" type="button">Edit</button>
									<button class="_btn _action_btn make_btn2" type="button">Make Features</button>
									<button class="_btn _action_btn make_btn3" type="button">Make Card</button>
									<button class="_btn _action_btn make_btn1" type="button">Delete</button>
								</td>
							</tr>
								<!-- ITEMS -->

								<!-- ITEMS -->
							<tr>
								<td>25-05-19</td>
								<td class="_table_name">Are Trump era is having an impact on what 's future voters</td>
								<td>Social</td>
								<td>
									<button class="_btn _action_btn view_btn1" type="button">View</button>
									<button class="_btn _action_btn edit_btn1" type="button">Edit</button>
									<button class="_btn _action_btn make_btn2" type="button">Make Features</button>
									<button class="_btn _action_btn make_btn3" type="button">Make Card</button>
									<button class="_btn _action_btn make_btn1" type="button">Delete</button>
								</td>
							</tr>
								<!-- ITEMS -->


						</table>
					</div>
				</div>
				 <Page :total="100" />

			</div>
		</div>
    </div>
</template>